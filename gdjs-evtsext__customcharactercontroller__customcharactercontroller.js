
gdjs.evtsExt__CustomCharacterController__CustomCharacterController = gdjs.evtsExt__CustomCharacterController__CustomCharacterController || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController = class CustomCharacterController extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Physics3 = behaviorData.Physics3 !== undefined ? behaviorData.Physics3 : "";
    this._behaviorData.moveSpeed = behaviorData.moveSpeed !== undefined ? behaviorData.moveSpeed : Number("500") || 0;
    this._behaviorData.jumpHeight = behaviorData.jumpHeight !== undefined ? behaviorData.jumpHeight : Number("-4800") || 0;
    this._behaviorData.cooldown = behaviorData.cooldown !== undefined ? behaviorData.cooldown : Number(".6") || 0;
    this._behaviorData.cd = Number("0") || 0;
    this._behaviorData.recoil = behaviorData.recoil !== undefined ? behaviorData.recoil : Number("180") || 0;
    this._behaviorData.Flippable = behaviorData.Flippable !== undefined ? behaviorData.Flippable : "";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Physics3 !== undefined)
      this._behaviorData.Physics3 = behaviorOverriding.Physics3;
    if (behaviorOverriding.moveSpeed !== undefined)
      this._behaviorData.moveSpeed = behaviorOverriding.moveSpeed;
    if (behaviorOverriding.jumpHeight !== undefined)
      this._behaviorData.jumpHeight = behaviorOverriding.jumpHeight;
    if (behaviorOverriding.cooldown !== undefined)
      this._behaviorData.cooldown = behaviorOverriding.cooldown;
    if (behaviorOverriding.cd !== undefined)
      this._behaviorData.cd = behaviorOverriding.cd;
    if (behaviorOverriding.recoil !== undefined)
      this._behaviorData.recoil = behaviorOverriding.recoil;
    if (behaviorOverriding.Flippable !== undefined)
      this._behaviorData.Flippable = behaviorOverriding.Flippable;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Physics3: this._behaviorData.Physics3,
    moveSpeed: this._behaviorData.moveSpeed,
    jumpHeight: this._behaviorData.jumpHeight,
    cooldown: this._behaviorData.cooldown,
    cd: this._behaviorData.cd,
    recoil: this._behaviorData.recoil,
    Flippable: this._behaviorData.Flippable,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Physics3 !== undefined)
      this._behaviorData.Physics3 = networkSyncData.props.Physics3;
    if (networkSyncData.props.moveSpeed !== undefined)
      this._behaviorData.moveSpeed = networkSyncData.props.moveSpeed;
    if (networkSyncData.props.jumpHeight !== undefined)
      this._behaviorData.jumpHeight = networkSyncData.props.jumpHeight;
    if (networkSyncData.props.cooldown !== undefined)
      this._behaviorData.cooldown = networkSyncData.props.cooldown;
    if (networkSyncData.props.cd !== undefined)
      this._behaviorData.cd = networkSyncData.props.cd;
    if (networkSyncData.props.recoil !== undefined)
      this._behaviorData.recoil = networkSyncData.props.recoil;
    if (networkSyncData.props.Flippable !== undefined)
      this._behaviorData.Flippable = networkSyncData.props.Flippable;
  }

  // Properties:
  
  _getPhysics3() {
    return this._behaviorData.Physics3 !== undefined ? this._behaviorData.Physics3 : "";
  }
  _setPhysics3(newValue) {
    this._behaviorData.Physics3 = newValue;
  }
  _getmoveSpeed() {
    return this._behaviorData.moveSpeed !== undefined ? this._behaviorData.moveSpeed : Number("500") || 0;
  }
  _setmoveSpeed(newValue) {
    this._behaviorData.moveSpeed = newValue;
  }
  _getjumpHeight() {
    return this._behaviorData.jumpHeight !== undefined ? this._behaviorData.jumpHeight : Number("-4800") || 0;
  }
  _setjumpHeight(newValue) {
    this._behaviorData.jumpHeight = newValue;
  }
  _getcooldown() {
    return this._behaviorData.cooldown !== undefined ? this._behaviorData.cooldown : Number(".6") || 0;
  }
  _setcooldown(newValue) {
    this._behaviorData.cooldown = newValue;
  }
  _getcd() {
    return this._behaviorData.cd !== undefined ? this._behaviorData.cd : Number("0") || 0;
  }
  _setcd(newValue) {
    this._behaviorData.cd = newValue;
  }
  _getrecoil() {
    return this._behaviorData.recoil !== undefined ? this._behaviorData.recoil : Number("180") || 0;
  }
  _setrecoil(newValue) {
    this._behaviorData.recoil = newValue;
  }
  _getFlippable() {
    return this._behaviorData.Flippable !== undefined ? this._behaviorData.Flippable : "";
  }
  _setFlippable(newValue) {
    this._behaviorData.Flippable = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.SharedData = class CustomCharacterControllerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CustomCharacterController_CustomCharacterControllerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CustomCharacterController_CustomCharacterControllerSharedData = new gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.SharedData(
      initialData
    );
  }
  return instanceContainer._CustomCharacterController_CustomCharacterControllerSharedData;
}

// Methods:
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {
{

let elseEventsChainSatisfied = false;

{


gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getjumpHeight() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getLinearVelocityX() > -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmoveSpeed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmoveSpeed()) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0, (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getLinearVelocityX() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmoveSpeed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getmoveSpeed() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0, (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
}

}


{


gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Flippable")).flipX(false);
}
}
}

}


{


gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")) < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getcooldown() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getrecoil(), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")).setNumber(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getrecoil(), 0, (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")).setNumber(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getrecoil()), 0, (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")).setNumber(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).applyForce(0, -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getrecoil()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterX()), (gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Physics3")).getMassCenterY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("cd")).setNumber(0);
}
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
}

}

}

};

gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Physics3": this._getPhysics3()
, "Flippable": this._getFlippable()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CustomCharacterController"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CustomCharacterController"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("CustomCharacterController::CustomCharacterController", gdjs.evtsExt__CustomCharacterController__CustomCharacterController.CustomCharacterController);
