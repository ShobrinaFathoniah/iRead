import {View, Share} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataDetail} from './redux/action';
import {CircleButton, LibreBaskerville} from '../../components';
import styles from './style';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600} from '../../helpers/colors';

const Detail = ({route, navigation}) => {
  const {params} = route.params;
  const idBook = params.idBook;

  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {detail = {}} = useSelector(state => state.detailBook);

  // const [detailData, setDetailData] = useState({});

  const getDetail = () => {
    dispatch(getDataDetail(dataToken, idBook));
  };

  useEffect(() => {
    getDetail();
  }, []);

  const shareData = () => {
    Share.share({
      message: `Saya ingin merekomendasikan Anda Buku dengan judul '${detail.title}'`,
    });
  };

  return (
    <View>
      <View style={styles.allButtons}>
        <View>
          <CircleButton
            nameIcon="arrow-left"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.miniButtons2}>
          <CircleButton
            style={{marginEnd: moderateScale(5)}}
            nameIcon="heart-o"
            color={LIGHT_BLUE_600}
          />
          <CircleButton
            style={{marginEnd: moderateScale(18)}}
            color={LIGHT_BLUE_600}
            nameIcon="share"
            onPress={shareData}
          />
        </View>
      </View>

      <LibreBaskerville>{detail.title}</LibreBaskerville>
    </View>
  );
};

export default Detail;
