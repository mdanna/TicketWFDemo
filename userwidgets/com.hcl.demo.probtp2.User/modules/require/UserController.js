define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      eventManager.subscribe(globals.EVT_SET_ROLE, (roleKey) => {
        this.role = roleKey;
        eventManager.publish(globals.EVT_SHOW_USER_SELECTOR, false);
      });
      
      this.view.preShow = () => {
        if(!this.initDone){
          this.view.onClick = () => {
            eventManager.publish(globals.EVT_SHOW_USER_SELECTOR, true);
          };
          this.initDone = true;
        }
      };
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'role', () => {
        return this._role;
      });
      defineSetter(this, 'role', value => {
        this._role = value;
        if(globals.users[value]){
          this.view.lblRole.text = globals.users[value].role;
          this.view.lblUserName.text = globals.users[value].name;
          this.view.imgUser.src = globals.users[value].image;
        }
      });
    }
  };
});