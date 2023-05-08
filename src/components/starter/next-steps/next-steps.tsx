import { component$ } from '@builder.io/qwik';
import styles from './next-steps.module.css';

export const GETTING_STARTED_STEPS = [
  {
    message:
      "Press and hold the <b>ALT</b> key to active 'Click-to-Source' mode"
  },
  {
    message:
      'Select the title of this page while keeping the <b>ALT</b> key pressed',
    hint: 'Edit the title and save the changes. If your editor does not open, have a look at <a href="https://github.com/yyx990803/launch-editor#supported-editors" target="_blank">this page</a> to set the correct <code>LAUNCH_EDITOR</code> value.'
  },
  {
    message:
      '<b>Update</b> now the <code>routeLoader$</code> defined in the <code>src/routes//layout.tsx</code> file',
    hint: 'Instead of returning the current date, you could return any possible string.<br />The output is displayed in the footer.'
  },
  {
    message: 'Create a <b>new Route</b> called <code>/me</code>',
    hint: 'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href="/me" target="_blank">here</a> ✨'
  },
  {
    message: 'Time to have a look at <b>Forms</b>',
    hint: 'Open <a href="/demo/todolist" target="_blank">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰'
  },
  {
    message: '<b>Congratulations!</b> You are now familiar with the basics! 🎉',
    hint: "If you need further info on how to use qwik, have a look at <a href='https://qwik.builder.io' target='_blank'>qwik.builder.io</a> or join the <a href='https://qwik.builder.io/chat' target='_blank'>Discord channel</a>."
  }
];

export default component$(() => {
  return (
    <div class="container container-purple container-center">
      <h2>
        Time for
        <br />
        <span class="highlight">demos!</span>
      </h2>
      <div class={styles.gettingstarted}>
        <ul>
          <li>
            <a href="/demo/useVisibleTask">useVisibleTask$</a>
          </li>
          <li>
            <a href="/demo/useTask">useTask$</a>
          </li>
          <li>
            <a href="/demo/todolist">routeLoader$ & routeAction$</a>
          </li>
          <li>
            <a href="/demo/react">React Integration</a>
          </li>
        </ul>
      </div>
    </div>
  );
});
