interface LandingButton {
  label: string;
  color: string;
  bgColor: string;
  icon?: JSX.Element;
}

const LandingButton = ({ bgColor, color, label, icon }: LandingButton) => {
  return (
    <button
      type="button"
      className={`${icon ? "flex items-center gap-2" : ""}
    ${color} ${bgColor} px-4 py-2 rounded-md font-bold cursor-pointer
    `}
    >
      {label} {icon}
    </button>
  );
};

export default LandingButton;
