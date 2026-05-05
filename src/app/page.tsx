import { SectionAbout } from '@/components/sections/SectionAbout';
import { SectionBeyond } from '@/components/sections/SectionBeyond';
import { SectionContact } from '@/components/sections/SectionContact';
import { SectionExperience } from '@/components/sections/SectionExperience';
import { SectionHero } from '@/components/sections/SectionHero';
import { SectionMeefi } from '@/components/sections/SectionMeefi';
import { SectionProjects } from '@/components/sections/SectionProjects';
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
			<SectionProjects />
			<SectionBeyond />
			<SectionReading />
			<SectionContact />
		</>
	);
}
