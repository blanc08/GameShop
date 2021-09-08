import cx from 'classnames';

interface ButtonTabProps {
  filter?: string;
  title?: string;
  active?: boolean;
}
export default function ButtonTab(props: ButtonTabProps) {
  const { title, filter, active } = props;
  const buttonClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a href="#" data-filter="*" className={buttonClass}>
      {title}
    </a>
  );
}
