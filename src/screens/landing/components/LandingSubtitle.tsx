interface ILandingSubtitle {
  text: string;
  color?: string;
}

const LandingSubtitle = ({ text, color }: ILandingSubtitle) => {
  return (
    <h2
      className={`uppercase tracking-widest text-sm font-bold ${
        color ? color : "text-night-black"
      }`}
    >
      {text}
    </h2>
  );
};

export default LandingSubtitle;
