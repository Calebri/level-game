
gdjs.evtsExt__CustomCharacterController__FlagTimer = gdjs.evtsExt__CustomCharacterController__FlagTimer || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer = class FlagTimer extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.time = objectData.content.time !== undefined ? objectData.content.time : Number("0") || 0;
    this._objectData.stopped = objectData.content.stopped !== undefined ? objectData.content.stopped : false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.time !== newObjectData.content.time)
      this._objectData.time = newObjectData.content.time;
    if (oldObjectData.content.stopped !== newObjectData.content.stopped)
      this._objectData.stopped = newObjectData.content.stopped;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _gettime() {
    return this._objectData.time !== undefined ? this._objectData.time : Number("0") || 0;
  }
  _settime(newValue) {
    this._objectData.time = newValue;
  }
  _getstopped() {
    return this._objectData.stopped !== undefined ? this._objectData.stopped : false;
  }
  _setstopped(newValue) {
    this._objectData.stopped = newValue;
  }
  _togglestopped() {
    this._setstopped(!this._getstopped());
  }

  

  
}

// Methods:
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext = {};
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects2= [];


gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("TimeText"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1[i].getVariables().get("time")).setNumber(0);
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1[i].hide();
}
}
}

}


};

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGoalFlagObjectsList = [...runtimeScene.getObjects("GoalFlag")];
var GDGoalFlagObjects = Hashtable.newFrom({"GoalFlag": thisGDGoalFlagObjectsList});
var thisGDTimeTextObjectsList = [...runtimeScene.getObjects("TimeText")];
var GDTimeTextObjects = Hashtable.newFrom({"TimeText": thisGDTimeTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GoalFlag": GDGoalFlagObjects
, "TimeText": GDTimeTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GoalFlag": thisGDGoalFlagObjectsList
, "TimeText": thisGDTimeTextObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects2.length = 0;

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.onCreatedContext.GDTimeTextObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext = {};
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.idToCallbackMap = new Map();
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final = [];

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final = [];

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final = [];

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects2= [];


gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1[i].getVariables().get("time")).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1.length = 0;

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("GoalFlag"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerObject"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2);
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBLeft() >= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBLeft()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_3) {
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBLeft() <= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBRight()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
}
isConditionTrue_2 = isConditionTrue_3;
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("GoalFlag"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerObject"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2);
{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBRight() >= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBLeft()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_3) {
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBRight() <= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getX()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBRight()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
}
isConditionTrue_2 = isConditionTrue_3;
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1);
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2);

gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2);

gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2);

{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBTop() >= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getY()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBTop()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_3) {
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBTop() <= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getY()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBBottom()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
}
isConditionTrue_2 = isConditionTrue_3;
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2);

gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2);

gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2);

{let isConditionTrue_3 = false;
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBBottom() >= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getY()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBTop()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_3) {
isConditionTrue_3 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i].getAABBBottom() <= (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[0].getY()) + (( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length === 0 ) ? 0 :gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[0].getAABBBottom()) ) {
        isConditionTrue_3 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = k;
}
isConditionTrue_2 = isConditionTrue_3;
}
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.indexOf(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]) === -1 )
            gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final.push(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1);
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1);
gdjs.copyArray(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1_2final, gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1);
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1[i].OnCollision(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollision = function(PlayerObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGoalFlagObjectsList = [...runtimeScene.getObjects("GoalFlag")];
var GDGoalFlagObjects = Hashtable.newFrom({"GoalFlag": thisGDGoalFlagObjectsList});
var thisGDTimeTextObjectsList = [...runtimeScene.getObjects("TimeText")];
var GDTimeTextObjects = Hashtable.newFrom({"TimeText": thisGDTimeTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GoalFlag": GDGoalFlagObjects
, "TimeText": GDTimeTextObjects
, "PlayerObject": PlayerObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "GoalFlag": thisGDGoalFlagObjectsList
, "TimeText": thisGDTimeTextObjectsList
, "PlayerObject": gdjs.objectsListsToArray(PlayerObject)
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects2.length = 0;

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDPlayerObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.CheckForCollisionContext.GDTimeTextObjects2.length = 0;


return;
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext = {};
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.idToCallbackMap = new Map();
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects2= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1= [];
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects2= [];


gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[i].getVariables().get("stopped"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[k] = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("TimeText"), gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[i].getVariables().get("stopped"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.floorTo((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1[0].getVariables()).get("time"))), 3)));
}
}
}

}


};

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollision = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDGoalFlagObjectsList = [...runtimeScene.getObjects("GoalFlag")];
var GDGoalFlagObjects = Hashtable.newFrom({"GoalFlag": thisGDGoalFlagObjectsList});
var thisGDTimeTextObjectsList = [...runtimeScene.getObjects("TimeText")];
var GDTimeTextObjects = Hashtable.newFrom({"TimeText": thisGDTimeTextObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "GoalFlag": GDGoalFlagObjects
, "TimeText": GDTimeTextObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "GoalFlag": thisGDGoalFlagObjectsList
, "TimeText": thisGDTimeTextObjectsList
},
  _behaviorNamesMap: {
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

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects2.length = 0;

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDGoalFlagObjects2.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects1.length = 0;
gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.OnCollisionContext.GDTimeTextObjects2.length = 0;


return;
}

gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("CustomCharacterController::FlagTimer", gdjs.evtsExt__CustomCharacterController__FlagTimer.FlagTimer);
