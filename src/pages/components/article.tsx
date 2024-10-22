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
    <div className="text-left ml-8 hover:font-extrabold">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-lg font-semibold">{subtitle}</div>
        <div>Date Published: {datePub}</div>
    </div>
  )
};

export default article;
