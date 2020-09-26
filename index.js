import program from 'config/program'

export default {
  primary: '#F26522',
  secondary: '#F26522',

  success: '#0A7F15',
  danger: '#FF0000',
  dangerAlt: '#d02828',
  warning: '#FFFF00',
  inactive: '#C9C9C9',
  link: '#5e9ed6',

  bg: {
    primary: '#F9F9F9',
    secondary: '#F2F2F2',
    alt: '#C9C9C9',
    dim: '#000000',
  },

  text: {
    primary: '#000000',
    secondary: '#FFFFFF',
    alt: '#81969E',
  },

  font: {
    primary: `font-family: 'Roboto', sans-serif;
			font-size: 1.5rem;
  		line-height: 2rem;
  		@media (max-width: 600px) {
    		font-size: 1.25rem;
    		line-height: 1.75rem;
			}`,
  },

  icon: {
    primary: '#81969E',
    secondary: '#FFFFFF',
    alt: '#000000',
  },

  card: {
    bg: '#FFFFFF',
    border: '#C9C9C9',
    header: '#FFFFFF',
  },

  shadow: {
    primary: '0 0 5px 1px rgba(0, 0, 0, 0.05)',
    secondary: '0 0 5px 1px rgba(0, 0, 0, 0.2)',
  },

  scrollbar: {
    primary: `overflow-y: auto;
			overflow-y: overlay;
			@media (max-width: 600px) {
				overflow-y: auto;
			}
			scrollbar-width: thin;
			scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1);
			&::-webkit-scrollbar {
				width: 0.6rem;
			}
			&::-webkit-scrollbar-track {
				background: rgba(0, 0, 0, 0.1);
			}
			&::-webkit-scrollbar-track:hover {
				background: rgba(0, 0, 0, 0.2);
			}
			&::-webkit-scrollbar-thumb {
				background: rgba(0, 0, 0, 0.3);
				border-radius: 10px;
			}
			&::-webkit-scrollbar-thumb:hover {
				background: rgba(0, 0, 0, 0.4);
			}`,
  },

  focus: {
    primary: 'outline: #5e9ed6 solid 1px;',
  },

  graph: {
    need: '#639247',
    projected: '#639247',
    goal: '#639247',
    today: '#639247'.withOpacity(0.5),
    todayLine: '#FFFFFF',
    assetLoss: '#F72029'.withOpacity(0.3),
    assetGain: '#639247'.withOpacity(0.7),
    shortfall: '#F72029'.withOpacity(0.6),
    assetLossAboveGoal: '#F72029'.withOpacity(0.5),
    otherSources: 'transparent',
    otherSourcesBorder: '#639247',
  },

  portfolio: {
    capitalPreservation: '#b4ff00',
    income: '#0a7f15',
    longTermGrowth: '#2d93b9',
    defensiveGrowth: '#f72029',
    tactical: '#641686',
  },

  progressIndicator: {
    completeBackground: program.colors.primary,
    activeBorder: program.colors.primary,
    activeDash: program.colors.primary,
    activeNumber: program.colors.primary,
    inactiveDash: '#C9C9C9',
    trianglePointer: program.colors.primary,
    completeNumber: '#FFFFFF',
    inCompleteNumber: program.colors.primary,
    inactiveBorder: '#C9C9C9',
    inactiveNumber: '#C9C9C9',
    inactiveBackground: '#C9C9C9',
  },

  accountsGraphPrimary: '#2d93b9',

  fonts: {
    web: {
      small: '0.75rem',
      normal: '1rem',
      header: '1.25rem',
    },
  }['web'],

  ...program.colors,
}
