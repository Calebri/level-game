gdjs.SceneCode = {};
gdjs.SceneCode.localVariables = [];
gdjs.SceneCode.idToCallbackMap = new Map();
gdjs.SceneCode.GDFlagTimerObjects1= [];
gdjs.SceneCode.GDFlagTimerObjects2= [];
gdjs.SceneCode.GDPlayerObjects1= [];
gdjs.SceneCode.GDPlayerObjects2= [];
gdjs.SceneCode.GDMainTileMapObjects1= [];
gdjs.SceneCode.GDMainTileMapObjects2= [];
gdjs.SceneCode.GDExplosion1Objects1= [];
gdjs.SceneCode.GDExplosion1Objects2= [];
gdjs.SceneCode.GDTimeTextObjects1= [];
gdjs.SceneCode.GDTimeTextObjects2= [];


gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SceneCode.GDPlayerObjects1});
gdjs.SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FlagTimer"), gdjs.SceneCode.GDFlagTimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.SceneCode.GDFlagTimerObjects1.length ;i < len;++i) {
    gdjs.SceneCode.GDFlagTimerObjects1[i].CheckForCollision(gdjs.SceneCode.mapOfGDgdjs_9546SceneCode_9546GDPlayerObjects1Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene", false);
}
}

}


};

gdjs.SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SceneCode.GDFlagTimerObjects1.length = 0;
gdjs.SceneCode.GDFlagTimerObjects2.length = 0;
gdjs.SceneCode.GDPlayerObjects1.length = 0;
gdjs.SceneCode.GDPlayerObjects2.length = 0;
gdjs.SceneCode.GDMainTileMapObjects1.length = 0;
gdjs.SceneCode.GDMainTileMapObjects2.length = 0;
gdjs.SceneCode.GDExplosion1Objects1.length = 0;
gdjs.SceneCode.GDExplosion1Objects2.length = 0;
gdjs.SceneCode.GDTimeTextObjects1.length = 0;
gdjs.SceneCode.GDTimeTextObjects2.length = 0;

gdjs.SceneCode.eventsList0(runtimeScene);
gdjs.SceneCode.GDFlagTimerObjects1.length = 0;
gdjs.SceneCode.GDFlagTimerObjects2.length = 0;
gdjs.SceneCode.GDPlayerObjects1.length = 0;
gdjs.SceneCode.GDPlayerObjects2.length = 0;
gdjs.SceneCode.GDMainTileMapObjects1.length = 0;
gdjs.SceneCode.GDMainTileMapObjects2.length = 0;
gdjs.SceneCode.GDExplosion1Objects1.length = 0;
gdjs.SceneCode.GDExplosion1Objects2.length = 0;
gdjs.SceneCode.GDTimeTextObjects1.length = 0;
gdjs.SceneCode.GDTimeTextObjects2.length = 0;


return;

}

gdjs['SceneCode'] = gdjs.SceneCode;
