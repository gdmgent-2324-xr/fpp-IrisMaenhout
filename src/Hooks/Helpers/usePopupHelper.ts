import { useEffect } from "react";

/**
 * 
 This hook sets up an IntersectionObserver to track the visibility of the provided popup.
 
 It monitors the visibility of the given element and updates the 'isPointerLockActive' session storage value accordingly.
 */

export function usePopupHelper(popupRef: React.RefObject<HTMLDivElement>) {
  // Check if 
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // Margin around the root.
      threshold: 0.8, // Percentage of the element that must be visible to trigger the callback
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (sessionStorage.getItem("isPointerLockActive")) {
        sessionStorage.removeItem("isPointerLockActive");
      }
      sessionStorage.setItem("isPointerLockActive", "false");
    }, options);

    if (popupRef.current) {
      observer.observe(popupRef.current);
    }


    // Cleanup function: Stop observing when the component unmounts or the observed element changes
    return () => {
      if (popupRef.current) {
        observer.unobserve(popupRef.current);
      }
    };
  }, []);
}
