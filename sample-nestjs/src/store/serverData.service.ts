import { Injectable } from '@nestjs/common';

export interface ISyncAction {
  epoch: number;
  redirect: string;
}

const defaultSyncAction: ISyncAction = {
  epoch: 0,
  redirect: '',
};

@Injectable()
export class ServerDataService {
  private equipSyncAction: Record<string, ISyncAction> = {};

  clearAction(key: string): ISyncAction {
    this.equipSyncAction[key] = { ...defaultSyncAction };
    return this.equipSyncAction[key];
  }

  setAction(key: string, redirect: string): ISyncAction {
    const prev = this.equipSyncAction[key] || { ...defaultSyncAction };
    prev.epoch = prev.epoch + 1;
    this.equipSyncAction[key] = {
      redirect,
      epoch: prev.epoch,
    };
    return this.equipSyncAction[key];
  }

  getAction(key: string): ISyncAction {
    return this.equipSyncAction[key] || { ...defaultSyncAction };
  }
}
