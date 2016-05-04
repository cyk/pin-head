declare module 'webcamjs' {
  export function set(config?: Config): void;
  export function attach(elem: string | HTMLElement): void;
  export function snap(user_callback: SnapCallback, user_canvas?: HTMLCanvasElement): void;

  interface Config {
    width?: number;
    height?: number;
    image_format?: string;
    jpeg_quality?: number;
  }

  interface SnapCallback { (
    data_uri?: string,
    canvas?: HTMLCanvasElement,
    context?: CanvasRenderingContext2D): void;
  }
}
