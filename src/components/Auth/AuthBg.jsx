import { AuthSharedOrderFoodBg } from './AuthBg.styled';
import { ReactComponent as Picture } from '../../images/icons/auth-bg-orderfood.svg';
import { ReactComponent as PictureBlackLegs } from '../../images/icons/auth-bg-orderfoodblacklegs.svg';



export const AuthBg = () => {
    return (

        <AuthSharedOrderFoodBg>
            <Picture className="bgWhiteLegs"/>
            <PictureBlackLegs className="bgBlackLegs" />
        </AuthSharedOrderFoodBg>
    )
}

export default AuthBg;