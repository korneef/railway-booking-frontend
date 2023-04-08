import classNames from "classnames"

interface OrderStepElementProps {
  step: number,
  number: number,
  value: string
}

export default function OrderStepElement(props: OrderStepElementProps) {
  const {step, number, value} = props;
  const className: string = classNames('order-steps__step', {'order-steps__step_completed': step >= number})

  return <>
    <div className={className}>
      <div className="order-steps__step-content">
        <div className="order-steps__step-number">{number}</div>
        <div className="order-steps__step-name">{value}</div>
      </div>
    </div>
  </>
}