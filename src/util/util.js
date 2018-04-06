/**
 * Created by Administrator on 2018/4/6.
 */

export function getRedirectPath ({type, avatar}) {
  // 根据用户类型跳转
  // boss => '/boss'  genius => '/genius'
  // 根据用户是否有头像跳转
  // boss => '/bossinfo'  genius => '/geniusinfo'
  
  let url = type === 'boss' ? '/boss' : '/genius';
  
  if (!avatar) {
    url += 'info';
  }
  
  return url;
}

