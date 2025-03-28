import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Button, Decimal, Fiat, i18n, Icons } from "rujira.ui";
import { Link } from "../../Gate";
import { MergePortfolioAccountFragment$key } from "./__generated__/MergePortfolioAccountFragment.graphql";
const { AngleRight, TrendUp } = Icons;

const fragment = graphql`
  fragment MergePortfolioAccountFragment on Account {
    merge {
      depositSize {
        amount
        asset {
          metadata {
            symbol
          }
          price {
            current
          }
        }
      }
      totalSize {
        amount
        asset {
          metadata {
            symbol
          }
          price {
            current
          }
        }
      }
    }
  }
`;

export const Merge: FC<{ k?: MergePortfolioAccountFragment$key }> = ({ k }) => {
  const data = useFragment(fragment, k);
  const deposit = BigInt(data?.merge?.depositSize.amount || 0);
  const size = BigInt(data?.merge?.totalSize.amount || 0);
  const bonus = size - deposit;
  const pct = Number(bonus) / Number(deposit);

  return (
    <div className="card h-full p-1.5">
      <div className="flex jc-sb wrap">
        <div className="flex dir-c ai-s p-1.5">
          <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">
            Migrating {data?.merge?.depositSize.asset.metadata.symbol}
          </i18n.h3>
          <Decimal
            amount={deposit}
            round={2}
            decimals={6}
            className="fs-28 condensed fw-500"
          />
          <Fiat
            symbol="$"
            amount={
              deposit *
              BigInt(data?.merge?.depositSize.asset.price?.current || 0)
            }
            decimals={18}
            className="color-grey condensed fs-16 fw-500"
          />

          <Button
            as={Link}
            className="button--xsmall button--outline mt-1 w-8"
            label="Withdraw"
            to="/migrate"
          />
        </div>
        <div className="flex dir-c p-1.5">
          <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">
            Bonus {data?.merge?.totalSize.asset.metadata.symbol}
          </i18n.h3>
          <Decimal
            amount={bonus}
            round={2}
            decimals={6}
            className="fs-28 condensed fw-500"
          />
          <div className="flex ai-c">
            <Fiat
              symbol="$"
              amount={
                bonus * BigInt(data?.merge?.totalSize.asset.price?.current || 0)
              }
              decimals={18}
              className="color-grey condensed fs-16 fw-500"
            />
            {pct > 0 && (
              <>
                <TrendUp className="color-teal w-2 ml-0.5" />
                <p className="color-teal fs-12 fw-500 ml-0.5 condensed">
                  +{(pct * 100).toLocaleDecimal(0)}%
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex dir-c ai-s p-1.5">
          <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">
            Unmigrated
          </i18n.h3>
          <Decimal
            amount={0n}
            round={2}
            decimals={6}
            className="fs-28 condensed fw-500"
          />
          <Fiat
            symbol="$"
            amount={0n}
            className="color-grey condensed fs-16 fw-500"
          />
          <Button
            as={Link}
            to="/migrate"
            className="button--xsmall button--outline button--blue button--icon-right mt-1"
            label="Migrate">
            <AngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
