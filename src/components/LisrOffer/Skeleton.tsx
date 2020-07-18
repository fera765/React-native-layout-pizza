import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item width={178} height={33} marginTop={40} paddingBottom={35} />
      <SkeletonPlaceholder.Item width={168} flexDirection="row">
        {Array.from(Array(10), (e, i) => (
          <SkeletonPlaceholder.Item key={i} marginLeft={28}>
            <SkeletonPlaceholder.Item width={142} height={142} marginTop={41} />
            <SkeletonPlaceholder.Item width={139} height={19} marginTop={18} />
            <SkeletonPlaceholder.Item width={139} height={48} marginTop={12} />
            <SkeletonPlaceholder.Item width={42} height={18} marginTop={10} />
            <SkeletonPlaceholder.Item width={88} height={24} marginTop={15} />
            <SkeletonPlaceholder.Item width={158} height={58} marginTop={15} />
            <SkeletonPlaceholder.Item
              width={168}
              justifyContent="space-between"
              flexDirection="row"
              alignItems="center"
            >
              <SkeletonPlaceholder.Item width={57} height={31} marginTop={27} />
              <SkeletonPlaceholder.Item width={40} height={40} marginTop={27} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        ))}
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;
