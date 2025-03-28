import {
  Environment,
  Network,
  Observable,
  RecordSource,
  Store,
  SubscribeFunction,
} from "relay-runtime";

import * as socket from "@absinthe/socket";
// @ts-ignore no types
import { createFetcher, createSubscriber } from "@absinthe/socket-relay";
import { Socket as PhoenixSocket } from "phoenix";
import { FC, PropsWithChildren } from "react";
import { RelayEnvironmentProvider } from "react-relay";

const conn = socket.create(
  new PhoenixSocket(`${import.meta.env.VITE_SOCKET}/socket`)
);

const legacySubscriber = createSubscriber(conn);

// @absinthe/socket-relay is outdated so wrap it with a fix
const subscriber: SubscribeFunction = (request, variables, cacheConfig) => {
  return Observable.create((sink) => {
    legacySubscriber(request, variables, cacheConfig, {
      onNext: sink.next,
      onError: sink.error,
      onCompleted: sink.complete,
    });
  });
};

const fetcher = createFetcher(conn);
const network = Network.create(fetcher, subscriber);
const store = new Store(new RecordSource());
const environment = new Environment({ store, network });

export const RelayContext: FC<PropsWithChildren> = ({ children }) => (
  <RelayEnvironmentProvider environment={environment}>
    {children}
  </RelayEnvironmentProvider>
);
