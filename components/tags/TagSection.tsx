import Headline from 'components/ui/Headline';
import { HeadlineVariant, TagDesign } from 'types/types';
import { FC } from 'react';
import { classNames } from 'utils/helpers';
import TagItem from './TagItem';

type Props = {
  headline: string;
  design?: TagDesign;
  tags: string[];
  variant?: HeadlineVariant;
};

const TagsSection: FC<Props> = ({
  headline,
  tags,
  variant = 'h2',
  design = 'tags',
}) => {
  return (
    <section className="mt-5">
      <Headline variant={variant} text={headline} />
      <div
        className={classNames(
          'flex flex-row content-around flex-wrap my-5',
          design === 'tags' ? 'items-center' : 'items-baseline'
        )}
      >
        {tags.map((tag, i) => (
          <TagItem key={i} tag={tag} design={design} />
        ))}
      </div>
    </section>
  );
};

export default TagsSection;
