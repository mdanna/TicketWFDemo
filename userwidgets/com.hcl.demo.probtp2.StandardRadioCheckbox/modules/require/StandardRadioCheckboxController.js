define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.view.preShow = () => {
        this.updateLayout();
        this.hasRendered = true;
      };

      this.view.flxLeft.onClick = () => {
        this.selection = 'left';
        this.updateLayout();
      };

      this.view.flxRight.onClick = () => {
        this.selection = 'right';
        this.updateLayout();
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'selection', () => {
        return this._selection;
      });
      defineSetter(this, 'selection', value => {
        this._selection = value;
        if(this.hasRendered){
          this.updateLayout();
        }
      });
    },

    updateLayout(){
      this.view.lblIconLeftSelected.isVisible = this.selection === 'left';
      this.view.lblIconLeftUnselected.isVisible = this.selection === 'right';
      this.view.lblIconRightSelected.isVisible = this.selection === 'right';
      this.view.lblIconRightUnselected.isVisible = this.selection === 'left';
    },

    getValue(){
      return this.selection === 'left' ? 'Oui' : 'Non';
    },
    
    getBooleanValue(){
      return this.selection === 'left' ? true : false;
    }
  };
});