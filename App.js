import * as React from 'react';
import { Text, View, Image, StyleSheet,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, MaterialIcons  } from '@expo/vector-icons';

function Feed() {
  return (
    <View style={{ backgroundColor: '#D6EAF8',flex: 1 ,justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.banner}>
        <Image
          style={styles.img}
          source={require('./src/img/primera.jpg')}/>
    </View>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sinopsis de Game of Thrones</Text>

      <Text style={styles.texto}>
      En un mundo fantástico y en un contexto medieval varias familias,
      relativas a la nobleza, se disputan el poder para dominar el
      territorio ficticio de Poniente (Westeros) y tomar el control
      de los Siete Reinos desde el Trono de Hierro, lugar donde el
      rey ejerce el poder.</Text>
      <Text style={styles.texto}>
      Mientras tiene lugar una guerra civil para conseguir el poder,
      detrás del Muro que divide el reino de Poniente y la zona norte,
      los muertos amenazan con librar la batalla contra los vivos.</Text>

    </View>
    <View style={{ flexDirection: "row", flex:1, marginTop:0, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/segunda.png')}/>
        </View>
        <View>
          <Image
            style={styles.mejores}
            source={require('./src/img/tercera.jpg')}/>
        </View>
      </View>
    </View>
  );
}

function Notifications() {
  return (
    <ScrollView>
    <View style={{ backgroundColor: '#D6EAF8',flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Primera Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/pt.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Segunda Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/st.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Tercera Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/tt.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Cuarta Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/ct.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Quinta Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/qt.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Sexta Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/sext.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Septima Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/sept.jpg')}/>
        </View>
      </View>

      <View style={styles.contenedor2}>
      <Text style={styles.titulo2}>Octava Temporada</Text>
    </View>
    <View style={{ flexDirection: "row", marginTop:10, marginLeft: 2, marginBottom:5 }}>
        <View>
          <Image
            style={styles.temporadas}
            source={require('./src/img/ot.jpg')}/>
        </View>
      </View>

    </View>
    </ScrollView>
  );
}

function Profile() {
  return (
    <View style={{ backgroundColor: '#D6EAF8',flex: 1, justifyContent: 'center', alignItems: 'center'  }}>

    <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor1.jpg')}/>
            <Text style={styles.textoact}>Emilia Clarke</Text>
            <Text style={styles.textoact}>Daenerys Targaryen</Text>
        </View>

        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor2.jpg')}/>
            <Text style={styles.textoact}>Kit Harington</Text>
            <Text style={styles.textoact}>Jon Snow</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor3.jpeg')}/>
            <Text style={styles.textoact}>Sophie Turner</Text>
            <Text style={styles.textoact}>Sansa Stark</Text>
        </View>

        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor4.jpg')}/>
            <Text style={styles.textoact}>Maisie Williams</Text>
            <Text style={styles.textoact}>Arya Stark</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 48, marginBottom:40 }}>
        <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor5.jpg')}/>
            <Text style={styles.textoact}>Peter Dinklage</Text>
            <Text style={styles.textoact}>Tyrion Lannister</Text>
        </View>

      <View style={styles.litaItem}>
          <Image
            style={styles.actores}
            source={require('./src/img/actor6.jpg')}/>
            <Text style={styles.textoact}>Natalie Dormer</Text>
            <Text style={styles.textoact}>Ana Bolena</Text>
        </View>
      </View>


    </View>
  );
}






const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#FF0000',
        tabBarActiveBackgroundColor: "#000000",
        tabBarInactiveTintColor: "#27F5EE",
        tabBarInactiveBackgroundColor: "#FFF"
      }}
    >
      <Tab.Screen
        name="Game of Trones"
        component={Feed}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Temporadas"
        component={Notifications}
        options={{
          tabBarLabel: 'Temporadas',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Actores"
        component={Profile}
        options={{
          tabBarLabel: 'Reparto',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-circle" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img:{
    width:400,
    height:150,
  },
  banner:{
    marginTop:0,
    flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    flex: 1,
    marginTop:-50,
    marginRight:20,
    marginLeft:20,
  },
  contenedor2:{
    marginTop:0,
    marginRight:20,
    marginLeft:20,
  },
  titulo2:{
    fontWeight:'bold',
    fontSize:18,
  },
  texto: {
    textAlign:'justify'
  },
  mejores:{
    width:180,
    height:150,
  },
  temporadas:{
    width:400,
    height:150,
  },
  actores:{
    width:120,
    height:120,
    borderRadius:85,
  },
  textoact: {
    textAlign:'center',
    marginRight: 50,
    fontSize:12,
    fontWeight:'bold',
  },
    litaItem: {
    flexBasis: "49%",
  },
});