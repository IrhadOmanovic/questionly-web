import { useEffect } from 'react';

export const useRippleEffect = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const createRipple = (event: MouseEvent) => {
      const button = event.currentTarget as HTMLElement;
      const rect = button.getBoundingClientRect(); // Get the button's position relative to the viewport
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      // Use rect to calculate the ripple position relative to the button
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];
      console.log(ripple);

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    };

    const node = ref.current;

    if (node) {
      node.addEventListener('click', createRipple);
    }

    return () => {
      if (node) {
        node.removeEventListener('click', createRipple);
      }
    };
  }, [ref]);
};
