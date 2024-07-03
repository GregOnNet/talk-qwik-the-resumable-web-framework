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

// TODO: Load timer once it becomes visible
export const Timer = component$(() => {
  return <></>;
});
