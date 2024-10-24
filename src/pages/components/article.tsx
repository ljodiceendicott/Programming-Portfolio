interface articleprops {
    className?: string;
    children?: React.ReactNode;
    article_url: string;
    title: string;
    subtitle: string;
    datePub: string;
}

const article: React.FC<articleprops> = ({
  className,
  children,
  article_url,
  title,
  subtitle,
  datePub
}) => {
  return(
    <div className="text-left ml-8 hover:text-slate-800 hover:cursor-pointer">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-lg">{subtitle}</div>
        <div>Date Published: {datePub}</div>
    </div>
  )
};

export default article;
