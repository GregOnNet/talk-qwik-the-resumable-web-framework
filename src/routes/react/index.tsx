import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { TableApp } from '~/integrations/react/mui';

export default component$(() => {
  useStyles$(`
    .hero {
      display: flex;
      vertical-align: middle;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      height: 450px;
      justify-content: center;
      gap: 40px;
    }

    .hero p {
      color: white;
      margin: 0;
      font-size: 1rem;
    }

    .table-app-container {
      padding: 1em;
      background: #f4f4f4;
      text-align: center
    }
  `);

  const show = useSignal(false);

  return (
    <>
      <div class="hero">
        <h1>
          Hello from <span class="highlight">React</span>
        </h1>
        <p>Have fun building your Qwik-App with React Components.</p>
        <p>
          <button onClick$={() => (show.value = true)}>Show table</button>
        </p>
      </div>

      <div class="table-app-container">
        {show.value && <TableApp client:visible></TableApp>}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik React'
};
