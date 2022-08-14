interface Props {
  height: string;
}

function Spacer({ height }: Props): JSX.Element {
  return <div className='spacer' style={{ height }} />;
}

export default Spacer;
