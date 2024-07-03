import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>

      <ul>
        <li>
          <Link href="/use-visible-task">useVisibleTask$</Link>
        </li>
        <li>
          <Link href="/use-task">useTask$</Link>
        </li>
        <li>
          <Link href="/loader-and-action">routeLoader$ & routeAction$</Link>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ]
};
