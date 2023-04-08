import classNames from "classnames";

interface SloganProps {
  bemClass: string
}

function Slogan(props: SloganProps) {
  const {bemClass} = props;
  const className = 'slogan';

  return (
    <div className={classNames(className, (bemClass+`__${className}`))}>
      <div className={`${className}__wrapper`}>
        <div className={`${className}_light`}>Вся жизнь - </div>
        <div className={`${className}_bold`}>путешествие</div>
      </div>
    </div>
  );
}

export default Slogan;