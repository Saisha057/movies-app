import { icons } from "@/constants/icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from "react-native";

const CustomTabIcon = (focused: boolean, icon: any, label: string) => {
  if (focused) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#B993F7', '#A3A1FB']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 999,
            height: 55,
            marginTop: 4,
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            minWidth: 110,
            maxWidth: 140,
            justifyContent: 'center',
            shadowColor: '#B993F7',
            shadowOpacity: 0.18,
            shadowRadius: 8,
            elevation: 2,
          }}
        >
          <Image
            source={icon}
            style={{ width: 22, height: 22, tintColor: "#151312" }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              marginLeft: 10,
              color: '#151312',
            }}
          >
            
            {label}
          </Text>
        </LinearGradient>
      </View>
    );
  }
  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon}
        tintColor="#A8B5DB" className="size-5"/>
    </View>
  )
};


const _Layout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        tabBarStyle: {
            backgroundColor: '#0f0D23',
            borderRadius: 55,
            marginHorizontal: 10,
            marginBottom: 36,
            height: 48,
            position: 'absolute',
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: '#0f0D23'
        }
      }}
    >
    <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ focused}) =>  CustomTabIcon(focused, icons.home, 'Home'),
        }}
      />
    
        <Tabs.Screen
            name="search"
            options={{ 
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({ focused }) => 
                CustomTabIcon(focused, icons.search, 'Search'),
            }}  
            />

        <Tabs.Screen 
            name="saved"
            options={{ 
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({ focused }) => CustomTabIcon(focused, icons.save, 'Saved'),
            }}  
            />

        <Tabs.Screen
            name="profile"
            options={{ 
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ focused }) => CustomTabIcon(focused, icons.person, 'Profile'),
            }}  
            />
    </Tabs>
        )
    }
export default _Layout;