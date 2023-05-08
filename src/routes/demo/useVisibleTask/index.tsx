import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export default component$(() => {
  const time = useSignal('');

  useVisibleTask$(() => {
    const interval = setInterval(
      () => (time.value = new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(interval);
  });

  return (
    <>
      <h2>Current Time</h2>
      <div style="height: 200vh" />
      <p>{time.value}</p>
    </>
  );
});

// TODO make the clock being executed when it becomes visible
// export const Clock = component$(() => )
