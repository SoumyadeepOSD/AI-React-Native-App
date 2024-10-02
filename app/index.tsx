import { Text, View, Image, TextInput, TouchableOpacity, ActivityIndicator, Keyboard, SafeAreaView, ScrollView } from "react-native";
import Images from "@/constants/Images";
import { useState } from "react";
import { search } from "@/utils/api_call";
import Markdown from 'react-native-markdown-display';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [streamData, setStreamData] = useState<String>("");
  const [prompt, setPrompt] = useState("");

  const onSearch = async()=>{
    Keyboard.dismiss();
    setLoading(true);
    setPrompt("");
    try {
      const response = await search({prompt:prompt});
      setStreamData(response);
      setLoading(false);
    } catch (error:any) {
      console.log(error.message);
      setLoading(false);
    }
  }
  return (
    <View className="m-3 p-2 bg-white rounded-lg h-[96%] shadow-md shadow-slate-800 flex flex-col items-center justify-between">
      <View className="flex flex-row items-center gap-2">
        <Image source={Images.appLogo} className="h-20 w-20" />
        <View className="flex flex-col items-start">
          <Text className="font-bold text-2xl">RecipeX</Text>
          <Text className="text-sm">Find your Recipes at your door</Text>
        </View>
      </View>
      {loading&&<ActivityIndicator size="large" color="#0000ff" />}
          {streamData&&<ScrollView>
          <Markdown>
            {streamData}
          </Markdown>
          </ScrollView>
          }
      <View className="w-[70%] flex flex-row items-center justify-center mb-5 gap-5">
        <TextInput placeholder="Enter Food Name" className="rounded-2xl border-blue-500 border-2 p-3 w-full" value={prompt} onChangeText={e=>setPrompt(e)} focusable={false}/>
        <TouchableOpacity className="bg-black px-5 py-4 rounded-2xl" onPress={onSearch}>
          <Text className="text-white font-bold">Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home