package utilities;

import java.util.HashMap;
import java.util.Map;

public class TempStorage {

    private static Map<String, String> data = new HashMap();

    public static void addDataToTempStorage(String key, String value){
        data.put(key, value);
    }

    public static String getDataFromTempStorage(String key){
        if (data.containsKey(key)){
            return data.get(key);
        }
        else {
            System.out.println("There is no such key in TempStorage data hashmap");
        }
        return "null";
    }

    public static void clearDataTempStorage(){
        data.clear();
    }




}
