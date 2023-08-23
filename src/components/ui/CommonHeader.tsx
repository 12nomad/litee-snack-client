import { IconType } from "react-icons";

interface ICommonHeader {
  Icon: IconType;
  title: string;
}

const CommonHeader = ({ Icon, title }: ICommonHeader) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-1">
        <Icon size={25} /> <span>{title}</span>
      </h2>
      <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-600"></div>
    </div>
  );
};

export default CommonHeader;
