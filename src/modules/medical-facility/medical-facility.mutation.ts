import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addRatingMedicalFacility, deleteRatingMedicalFacility } from './medical-facility.api'

export const useAddRatingMedicalFacility = (slug: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addRatingMedicalFacility,

    async onMutate(newRating) {
      await queryClient.cancelQueries({ queryKey: ['medical-facilities', slug] })

      const previousData = queryClient.getQueryData(['medical-facilities', slug])

      queryClient.setQueryData(['medical-facilities', slug], (old: any) => {
        if (!old) return old

        return {
          ...old,
          ratings: [
            {
              ...newRating.data,
              postedBy: 'current-user',
              createdAt: new Date()
            },
            ...old.ratings
          ]
        }
      })

      return { previousData }
    },

    onError(_, __, context) {
      queryClient.setQueryData(['medical-facilities', slug], context?.previousData)
    },

    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['medical-facilities', slug]
      })
    }
  })
}

export const useEditRatingMedicalFacility = (slug: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addRatingMedicalFacility,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['medical-facilities', slug]
      })
    }
  })
}

export const useDeleteRatingMedicalFacility = (slug: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteRatingMedicalFacility,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['medical-facilities', slug]
      })
    }
  })
}
