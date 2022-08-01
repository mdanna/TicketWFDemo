define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          eventManager.subscribe(globals.EVT_SHOW_USER_SELECTOR, (show) => {
            this.view.isVisible = show;
          });
          
			this.view.preShow = () => {
              if(!this.initDone) {
                this.view.flxUserSelector.removeAll();
                Object.keys(globals.users).forEach((roleKey, index) => {
                  const userSelectorItem = new com.hcl.demo.probtp2.UserSelectorItem({
                    id: `userSelectorItem_${index}`
                  }, {}, {});
                  const user = globals.users[roleKey];
                  userSelectorItem.roleKey = roleKey;
                  userSelectorItem.image = user.image;
                  userSelectorItem.user = user.name;
                  userSelectorItem.role = user.role;
                  this.view.flxUserSelector.add(userSelectorItem);
                });
                
                this.view.flxBackground.onClick = () => {
                  eventManager.publish(globals.EVT_SHOW_USER_SELECTOR, false);
                };
                
                this.initDone = true;
              }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});