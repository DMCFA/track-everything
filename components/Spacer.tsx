interface props {
  height: string;
}

const Spacer = ({ height }: props): JSX.Element => {
  return <div className='spacer' style={{ height: height }}></div>;
};

export default Spacer;
