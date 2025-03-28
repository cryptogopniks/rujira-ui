import { Buffer } from "buffer";
import { FC, Fragment } from "react";
import { useFragment } from "react-relay";
import { Link } from "react-router-dom";
import { graphql } from "relay-runtime";
import { ContractsFragment$key } from "./__generated__/ContractsFragment.graphql";

const fragment = graphql`
  fragment ContractsFragment on Developer {
    codes {
      id
      creator
      checksum
      contracts {
        info {
          admin
          label
        }
        address
        config
      }
    }
  }
`;

export const Contracts: FC<{ k: ContractsFragment$key }> = ({ k }) => {
  const data = useFragment(fragment, k);
  return (
    <div className="rujira__inner--pad portfolio">
      <div className="rujira__inner">
        <h1 className="h1">Deployed Code</h1>
        <div className="relative card p-3 mt-2">
          <table className="table table--big condensed portfolio__balances">
            <thead>
              <tr>
                <th className="bg-black">Code ID</th>
                <th>Label</th>
                <th>Creator</th>
                <th>Checksum</th>
              </tr>
            </thead>
            <tbody>
              {[...data.codes].reverse().map((x) => {
                const id = Buffer.from(x.id, "base64")
                  .toString()
                  .replace("Code:", "");
                return (
                  <Fragment key={x.id}>
                    <tr>
                      <td>
                        <Link className="color-teal" to={`/deploy/${id}`}>
                          {id}
                        </Link>
                      </td>
                      <td>
                        <code>{x.creator}</code>
                      </td>
                      <td>
                        <code>{x.checksum}</code>
                      </td>
                    </tr>
                    {x.contracts.length ? (
                      <tr>
                        <td />
                        <td colSpan={2}>
                          <table>
                            <thead>
                              <tr>
                                <th>Address</th>
                                <th>Admin</th>
                                <th>Config</th>
                              </tr>
                            </thead>
                            <tbody>
                              {x.contracts.map((y) => (
                                <tr key={y.address}>
                                  <td>
                                    <Link
                                      className="color-teal"
                                      to={`/manage/${y.address}`}>
                                      {y.address}
                                    </Link>
                                  </td>
                                  <td>{y.info?.label}</td>
                                  <td>{y.info?.admin}</td>
                                  <td>
                                    {y.config && (
                                      <pre>
                                        {JSON.stringify(
                                          JSON.parse(y.config),
                                          null,
                                          2
                                        )}
                                      </pre>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
