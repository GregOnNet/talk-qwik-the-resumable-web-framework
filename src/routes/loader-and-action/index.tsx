import { component$ } from '@builder.io/qwik';
import {
  Form,
  routeAction$,
  routeLoader$,
  z,
  zod$,
  type DocumentHead
} from '@builder.io/qwik-city';

import styles from './styles.module.css';

interface ListItem {
  text: string;
}

export const list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  async (item, requestEvent) => {
    console.log('Request headers:', requestEvent.headers);
    console.log('Request cookies:', requestEvent.cookie);
    console.log('Request url:', requestEvent.url);
    console.log('Request params:', requestEvent.params);
    console.log('Request body:', await requestEvent.parseBody());

    list.push(item);
    return {
      success: true
    };
  },
  zod$({
    text: z.string().trim().min(1)
  })
);

export default component$(() => {
  const list = useListLoader();
  const action = useAddToListAction();

  return (
    <>
      <div class="container container-center">
        <h1>
          <span class="highlight">TODO</span> List
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        {(list.value.length && (
          <ul class={styles.list}>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>{item.text}</li>
            ))}
          </ul>
        )) || <span class={styles.empty}>No items found</span>}
      </div>

      <div class="container container-center">
        <Form action={action} spaReset>
          <input type="text" name="text" required class={styles.input} />{' '}
          <button type="submit" class="button-dark">
            Add item
          </button>
        </Form>

        <p class={styles.hint}>
          PS: This little app works even when JavaScript is disabled.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Todo List'
};
