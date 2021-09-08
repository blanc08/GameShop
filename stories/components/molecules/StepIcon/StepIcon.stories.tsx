import { Meta } from '@storybook/react';
import StepIcon, {
  StepIconProps,
} from '../../../../components/molecules/StepIcon';

export default {
  title: 'Components/Molecules/StepIcon',
  component: StepIcon,
} as Meta;

const Template = (args: StepIconProps) => <StepIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '1. Start',
  icon: 'step1',
  desc1: 'Pilih salah satu Game',
  desc2: 'Yang ingin kamu Top Up',
};
