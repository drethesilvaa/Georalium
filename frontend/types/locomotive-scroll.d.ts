// types/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    name?: string;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    smartphone?: { smooth?: boolean };
    tablet?: { smooth?: boolean };
  }

  export type ScrollToTarget = string | HTMLElement | number;

  export interface ScrollToOptions {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    disableLerp?: boolean;
    callback?: () => void;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    on(event: "scroll" | string, cb: (args: any) => void): void;
    off(event: "scroll" | string, cb: (args: any) => void): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: ScrollToTarget, options?: ScrollToOptions): void;
    destroy(): void;
  }
}
