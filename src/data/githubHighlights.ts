/** Curated from https://api.github.com/users/emiliosaidm/repos — not exhaustive. */
export type RepoHighlight = {
	name: string;
	description: string;
	url: string;
	language: string | null;
	topics?: string[];
};

export const repoHighlights: RepoHighlight[] = [
	{
		name: 'fdd_p26',
		description:
			'Fork of ITAM “Fuentes de Datos” (Spring 2026) — data engineering / sourcing coursework in Jupyter.',
		url: 'https://github.com/emiliosaidm/fdd_p26',
		language: 'Jupyter Notebook',
	},
	{
		name: 'Proyecto-1-FDD',
		description:
			'First project track for the same data-sources course — notebooks and pipelines.',
		url: 'https://github.com/emiliosaidm/Proyecto-1-FDD',
		language: 'Jupyter Notebook',
	},
	{
		name: 'docs',
		description: 'Personal MDX-powered documentation site experiment.',
		url: 'https://github.com/emiliosaidm/docs',
		language: 'MDX',
	},
	{
		name: 'Normalizacion',
		description: 'Python project around normalization / data prep patterns.',
		url: 'https://github.com/emiliosaidm/Normalizacion',
		language: 'Python',
	},
	{
		name: 'Heart-disease-mortality',
		description:
			'Public health–oriented data repository (mortality angles) — exploratory analysis.',
		url: 'https://github.com/emiliosaidm/Heart-disease-mortality',
		language: null,
	},
	{
		name: 'Arboles-AVL',
		description: 'Classic CS structures — AVL trees in Java.',
		url: 'https://github.com/emiliosaidm/Arboles-AVL',
		language: 'Java',
	},
	{
		name: 'rails-watch-list',
		description: 'Le Wagon era — Rails MVC, CRUD, and auth patterns.',
		url: 'https://github.com/emiliosaidm/rails-watch-list',
		language: 'Ruby',
	},
	{
		name: 'rails-simple-airbnb',
		description: 'Rails marketplace-style MVP clone exercise.',
		url: 'https://github.com/emiliosaidm/rails-simple-airbnb',
		language: 'Ruby',
	},
	{
		name: 'cookbook-sinatra',
		description: 'Lightweight Ruby / Sinatra cookbook app.',
		url: 'https://github.com/emiliosaidm/cookbook-sinatra',
		language: 'Ruby',
	},
	{
		name: 'dotfiles',
		description: 'Shell setup — references Le Wagon student defaults.',
		url: 'https://github.com/emiliosaidm/dotfiles',
		language: null,
	},
];
