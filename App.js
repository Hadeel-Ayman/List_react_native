import { StyleSheet, Modal, Image, Text, ScrollView, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { SimpleModal } from './components/simpleModal';
const img = require('./assets/man.jpg');
export default function App() {
  const data = [
    {
      id: 1,
      name: '27/9/2022',
      image: require('./assets/letter.png'),
      icon: require('./assets/download.png')
    },
    {
      id: 2,
      name: '20/1/2022',
      image: require('./assets/letter.png'),
      icon: require('./assets/download.png')
    },
    {
      id: 3,
      name: '22/1/2022',
      image: require('./assets/letter.png'),
      icon: require('./assets/download.png')
    },
    {
      id: 4,
      name: '28/7/2022',
      image: require('./assets/letter.png'),
      icon: require('./assets/download.png')

    },
    {
      id: 5,
      name: '19/5/2022',
      image: require('./assets/letter.png'),
      icon: require('./assets/download.png')

    },
  ]

  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = (bool) => {
    SetIsModalVisible(bool)
  }

  const setData = (data) => {
    setchooseData(data);
  }
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.text}>
          {chooseData}
        </Text>

        <View style={styles.icon}>
          <View style={styles.head}>
            <Image source={img} style={styles.img}></Image>
            <Text style={styles.Headtext}>Hi, Hadeel !</Text>
          </View>
          <MaterialIcons name="notifications" size={30} color="black" style={styles.icons} />
        </View>


        <View style={styles.SectionTow}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500', marginBottom: 10, lineHeight: 25 }}>Let’s start {'\n'} CONSULTATION</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Start</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.texts}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Last Documents</Text>
          <Text style={{ marginLeft: 81, fontWeight: '500' }}>View all</Text><MaterialIcons name="arrow-forward-ios" size={20} color="#98bcff" />
        </View>


        <FlatList style={styles.flat}
          data={data}
          keyExtractor={data => data.id}
          renderItem={
            ({ item }) => (
              <TouchableOpacity onPress={() => changeModalVisible(true)}>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <Image source={item.image} style={styles.images}></Image>
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Image source={item.icon} style={styles.download}></Image>
                </View>
              </TouchableOpacity>
            )
          }
        />


        <Modal
          transparent={true}
          animationType='slide'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}>
          <SimpleModal
            changeModalVisible={changeModalVisible}
            setData={setData} />
        </Modal>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 100
  },
  head: {
    flexDirection: 'row',
    marginTop: 40,
  },
  Headtext: {
    marginLeft: 10,
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  icons: {
    marginTop: 46,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 15
  },
  SectionTow: {
    width: '90%',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    borderRadius: 12,
    padding: 15,
    marginTop: 50
  },
  btn: {
    backgroundColor: '#4c72bb',
    height: 40,
    width: 150,
    borderRadius: 10
  },
  txt: {
    textAlign: 'center',
    paddingTop: 7,
    color: '#fff'
  },
  texts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 40,
    alignItems: 'center'
  },
  flat: {
    width: '90%',
    marginTop: 17,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#aaa',
    borderWidth: 1,
    marginTop: 10,
    justifyContent: 'space-between',
    padding: 7,
    borderRadius: 15,
    alignItems: 'center',
  },
  images: {
    height: 50,
    width: 50,
    marginLeft: 10
  },
  name: {
    fontWeight: '500',
    marginRight: 100
  },
  download: {
    width: 40,
    height: 40,
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }

});
