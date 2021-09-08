import { Meta } from '@storybook/react';
import FeaturedGameCard, {
  FeaturedGameCardProps,
} from '../../../components/molecules/FeaturedGameCard';

export default {
  title: 'Components/Molecules/FeaturedGameCard',
  component: FeaturedGameCard,
} as Meta;

const Template = (args: FeaturedGameCardProps) => (
  <FeaturedGameCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  thumbnail: '/img/Thumbnail-1.png',
};
