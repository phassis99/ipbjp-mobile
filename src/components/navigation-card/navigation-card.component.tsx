import "./navigation-card.component.scss";

interface NavigationCardProps {
  activity: string;
  icon: string;
  color: string;
}

const NavigationCard: React.FC<NavigationCardProps> = (props) => {
  const className = `${props?.icon} ${props?.color}`;

  return (
    <div className="navigation-card w-40 h-32">
      <div className="flex flex-col gap-y-3 items-center">
        <div className="navigation-icon">
          <i className={className}></i>
        </div>

        <h2 className="text-center break-normal text-sm font-light">
          {props?.activity}
        </h2>
      </div>
    </div>
  );
};

export default NavigationCard;
