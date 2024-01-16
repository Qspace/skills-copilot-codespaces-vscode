function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    replace: true,
    scope: {
      member: '='
    }
  };
}