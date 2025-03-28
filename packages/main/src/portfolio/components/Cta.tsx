import { Link } from "react-router-dom";
import { Button, i18n, Icons } from "rujira.ui";

export const Cta = () => (
  <div className="row pad wrap gradient-card-container">
    <div className="col-12 col-lg-6 mt-2 mt-lg-4">
      <div className="gradient-card gradient-card--purple p-2 p-lg-3 bg-black">
        <div className="flex ai-c">
          <div>
            <i18n.h3 className="fs-14 fs-lg-16 lh-22 fw-500 color-primary1">
              Buy Crypto
            </i18n.h3>
            <i18n.p className="fs-12 fs-lg-14 color-white mt-0.5">
              Let's get started by purchasing some crypto
            </i18n.p>
          </div>
          <Button
            to="/buy"
            as={Link}
            className="ml-a button--icon-right no-shrink"
            label="Buy Now">
            <Icons.AngleRight />
          </Button>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6 mt-2 mt-lg-4">
      <div className="gradient-card gradient-card--blue p-2 p-lg-3 bg-black">
        <div className="flex ai-c">
          <div>
            <i18n.h3 className="fs-12 fs-lg-16 lh-22 fw-500 color-teal">
              Deposit Crypto
            </i18n.h3>
            <i18n.p className="fs-12 fs-lg-14 color-white mt-0.5">
              Let's get started by depositing on Rujira
            </i18n.p>
          </div>
          <Button
            onClick={() => document.getElementById("deposit")?.click()}
            className="ml-a button--blue button--icon-right no-shrink"
            label="Deposit Now">
            <Icons.ArrowUpRight />
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export const Buy = ({ onClick }: { onClick: () => void }) => (
  <div className="gradient-card gradient-card--blue p-2 p-lg-3 bg-black h-full flex dir-c ai-s">
    <i18n.h3 className="fs-14 fs-lg-16 lh-22 fw-500 color-teal">
      Buy Crypto
    </i18n.h3>
    <i18n.p className="fs-12 fs-lg-14 lh-16 lh-lg-18 color-white mt-0.5 mb-2">
      Quickly and easily using your preferred payment method
    </i18n.p>

    <Button
      onClick={onClick}
      className="mt-a mb-0 button--blue button--icon-right no-shrink"
      label="Buy Now">
      <Icons.ArrowUpRight />
    </Button>
  </div>
);

export const Deposit = () => (
  <div className="gradient-card gradient-card--purple p-2 p-lg-3 bg-black h-full flex dir-c ai-s">
    <i18n.h3 className="fs-14 fs-lg-16 lh-22 fw-500 color-primary1">
      Deposit Crypto
    </i18n.h3>
    <i18n.p className="fs-12 fs-lg-14 lh-16 lh-lg-18 color-white mt-0.5 mb-2">
      Onto the App Layer and put it to work for you
    </i18n.p>

    <Button
      onClick={() => document.getElementById("deposit")?.click()}
      className="mt-a mb-0 button--icon-right no-shrink"
      label="Deposit Now">
      <Icons.ArrowUpRight />
    </Button>
  </div>
);
