import { SectionAbout } from '@/components/sections/SectionAbout';
import { SectionContact } from '@/components/sections/SectionContact';
import { SectionExperience } from '@/components/sections/SectionExperience';
import { SectionHero } from '@/components/sections/SectionHero';
import { SectionMeefi } from '@/components/sections/SectionMeefi';
import { SectionReading } from '@/components/sections/SectionReading';
import { SectionSkills } from '@/components/sections/SectionSkills';

export default function HomePage() {
	return (
		<>
			<SectionHero />
			<SectionAbout />
			<SectionMeefi />
			<SectionExperience />
			<SectionSkills />
			<SectionReading />
			<SectionContact />
		</>
	);
}
