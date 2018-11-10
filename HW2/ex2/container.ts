export interface Container <T>{
  put(el:T):void;
  get():T;
  remove(el:T);
}
