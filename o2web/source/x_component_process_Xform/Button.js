MWF.xDesktop.requireApp("process.Xform", "$Module", null, false);
/** @class Button 按钮组件。
 * @example
 * //可以在脚本中获取该组件
 * //方法1：
 * var attachment = this.form.get("name"); //获取组件
 * //方法2
 * var attachment = this.target; //在组件事件脚本中获取
 * @extends MWF.xApplication.process.Xform.$Module
 * @category FormComponents
 * @hideconstructor
 */
MWF.xApplication.process.Xform.Button = MWF.APPButton =  new Class({
    Implements: [Events],
    Extends: MWF.APP$Module,
    iconStyle: "personfieldIcon",

    _loadUserInterface: function(){
        // var button = new Element("button");
        // button.inject(this.node, "after");
        // this.node.destroy();
        // this.node = button;

        var button = this.node.getElement("button");
        if (!button) button = new Element("button");
            button.inject(this.node, "after");
        this.node.destroy();
        this.node = button;

        this.node.set({
            "id": this.json.id,
            "text": this.json.name || this.json.id,
            "MWFType": this.json.type
        });
        if (!this.json.preprocessing) this.node.setStyles(this.form.css.buttonStyles);

    }

}); 
