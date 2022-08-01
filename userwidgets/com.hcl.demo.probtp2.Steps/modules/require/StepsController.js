define(function() {
  const stepNames = [
    'Rapport de missions',
    'Création du rapport',
    'Recommandation',
    'Preposition de Solution',
    'Définition de solution',
    'J\'accepte la proposition',
    'Réalisation de solution',
    'J\'accepte la solution réalisée'
  ];

  const SKIN_SELECTED = 'sknFlxStepSelected';
  const SKIN_UNSELECTED = 'sknFlxStepUnselected';

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
		eventManager.subscribe(globals.EVT_SET_STEP, step => this.step = step);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'step', () => {
        return this._step;
      });
      defineSetter(this, 'step', value => {
        this._step = parseInt(value || 0);
        this.view.lblStep.text = stepNames[this._step];
        for(let i = 0; i < 8; i++){
          this.view[`flxStep${i}`].skin = i === this._step ? SKIN_SELECTED : SKIN_UNSELECTED;
        }
      });
    }
  };
});