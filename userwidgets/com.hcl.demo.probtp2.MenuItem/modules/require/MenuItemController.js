define(function() {
  const SKIN_SELECTED = 'sknLblMenuItemSelected'; 
  const SKIN_UNSELECTED = 'sknLblMenuItemUnselected'; 

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      
      eventManager.subscribe(globals.EVT_SELECT_MENU_ITEM, (menuKey) => {
        this.view.flxMenuItemSelected.isVisible = menuKey === this.key;
        this.view.lblMenuItem.skin = menuKey === this.key ? SKIN_SELECTED : SKIN_UNSELECTED;
      });
      
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.onClick = () => {
            eventManager.publish(globals.EVT_SELECT_MENU_ITEM, this.key);
          };
          this.initDone = true;
        }
      };

    },
    
    initGettersSetters: function() {
      defineGetter(this, 'selected', () => {
        return this._selected;
      });
      defineSetter(this, 'selected', value => {
        this._selected = value;
        this.view.flxMenuItemSelected.isVisible = !!value;
        this.view.lblMenuItem.skin = value ? SKIN_SELECTED : SKIN_UNSELECTED;
      });
      defineGetter(this, 'key', () => {
        return this._key;
      });
      defineSetter(this, 'key', value => {
        this._key = value;
      });
    }
  };
});